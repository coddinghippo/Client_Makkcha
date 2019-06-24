import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "antd";
import uuidv1 from "uuid/v1";
import { lineColors, fontSize } from "../Styles/_mixin";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  width: 90%;
  max-width: 90%;
  height: 1rem;
  background: sky-blue;
  // &:first-child {
  //   border-top-left-radius: 5px;
  //   border-bottom-left-radius: 5px;
  // }
`;

const Bar = styled.div`
  text-align: center;
  height: 20px;
  &:first-of-type {
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
  }
  &:last-of-type {
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }
`;

const TextContainer = styled.div`
  width: 90%;
  margin: 1rem 0;
`;

const Text = styled.p`
  margin: 0.5rem 0;
  width: 90%;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  bottom: 0;
`;

const StyledButton = styled(Button)`
  width: 90%;
  height: 3rem;
  color: white;
  background: #000033;
  border-radius: 1.5rem;
  margin-bottom: 1.3rem;
  backgrouncolor: #000;
  font-weight: bold;
  font-size: ${fontSize.largeFontSize};
`;

export default class OptinList extends Component {
  constructor(props) {
    super(props);
    const { taxiInfo, subwayPathOptionList, defaultInfo } = this.props;
    this.state = {
      taxiInfo,
      subwayPathOptionList,
      defaultInfo,
      subwayRoutes: [{ total: 0, runTime: [] }],
      walkInfo: { time: 0 }
    };
  }

  // // Json-server Option

  componentDidMount() {
    const { taxiInfo, subwayPathOptionList } = this.props.data;
    const { walkInfo } = this.state.subwayPathOptionList;

    this.getRouteInfo();

    this.setState({ taxiInfo, subwayPathOptionList, walkInfo });
  }

  getRouteInfo() {
    const { routeList } = this.state.subwayPathOptionList;
    const subwayRoutes = [];
    const { walkInfo } = this.state.subwayPathOptionList;
    for (let idx = 0; idx < routeList.length; idx++) {
      console.log(walkInfo.time);
      let {
        pathStationList,
        distance,
        price
      } = this.state.subwayPathOptionList.routeList[Number(idx)];
      let runTimeArr = [{ line: "도보", time: walkInfo.time * 60 }];
      // store sum of runTime for each line
      let cum = 0;
      pathStationList.map(item => {
        let time = item.runTime;
        let line = item.line;
        if (time !== null) {
          time = parseInt(time.slice(0, 2)) * 60 + parseInt(time.slice(3));
          cum += time;
        } else {
          runTimeArr.push({ line, time: cum });
          cum = 0;
        }
      });
      runTimeArr.push({
        line: pathStationList[pathStationList.length - 1].line,
        time: cum
      });

      // Object.keys(runTimeObj).forEach(key => (total += runTimeObj[key]));
      let total = runTimeArr.reduce((a, x) => {
        return a + x.time;
      }, 0);
      total += walkInfo.time;

      subwayRoutes.push({ runTime: runTimeArr, total, distance, price });
    }
    this.setState({ subwayRoutes });
  }

  renderBar() {
    // Hard Coded idx
    let idx = 0;
    const { total, runTime } = this.state.subwayRoutes[idx];
    return runTime.map(item => {
      let length = Math.floor((Number(item.time) / total) * 100);
      if (length < 24) length = 24;
      length = String(length) + "%";
      return (
        <Bar
          className="haha"
          key={uuidv1()}
          style={{
            width: length,
            backgroundColor: lineColors[item.line],
            color: "white"
          }}
        >
          {item.line === "도보" ? "도보" : null}
          {Math.floor(Number(item.time) / 60)}분
        </Bar>
      );
    });
  }

  render() {
    const { taxiInfo, defaultInfo, walkInfo } = this.state;
    const { total, distance, price } = this.state.subwayRoutes[0];
    return (
      <Container>
        <Card>
          <TextContainer>
            <Text>지하철 {Math.floor(total / 60)}분</Text>
            <p weight="normal">
              {(distance / 1000).toFixed(1)}km |{" "}
              {String(Math.floor(price / 1000)) + "," + String(price % 1000)}원
              | 막차 {defaultInfo.lastTime.slice(0, 5)} | 도보 {walkInfo.time}분
            </p>
          </TextContainer>
          <BarContainer className="nana" style={{ marginBottom: 0 }}>
            {this.renderBar()}
          </BarContainer>
          <BarContainer style={{ marginTop: 0 }} />
        </Card>

        <Card>
          <TextContainer>
            <Text>택시 {taxiInfo.time}분</Text>
            <p>
              {(taxiInfo.distance / 1000).toFixed(1)}km | 약{" "}
              {String(Math.floor(taxiInfo.price / 1000)) +
                "," +
                String(taxiInfo.price % 1000)}
              원
            </p>
          </TextContainer>
          <BarContainer>
            <Bar
              style={{
                width: "100%",
                backgroundColor: "#ffd300",
                color: "white"
              }}
            >
              {taxiInfo.time}분
            </Bar>
          </BarContainer>
        </Card>
        <ButtonContainer>
          <StyledButton size="large" onClick={this.props.onButtonPress}>
            목적지 재설정
          </StyledButton>
        </ButtonContainer>
      </Container>
    );
  }
}

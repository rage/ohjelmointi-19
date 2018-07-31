import React from 'react'
import styled from 'styled-components'

const Event = styled.div`
  width: 100px;
  position: relative;
  background: #FFDFDF;
  border-radius: 0.4em;
  text-align: center;
  top: 16px;
  left: ${props => (props.day / props.monthDays) * 662 - 50}px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top-color: #FFDFDF;
    border-bottom: 0;
    margin-left: -15px;
    margin-bottom: -15px;
  }
`

export default class TimelineEvent extends React.Component {
  render() {
    const monthDays = 31;
  if (this.props.month === 2) {
    monthDays = 28;
  } else if (this.props.month === 4) {
    monthDays = 30;
  }
    return <Event day={this.props.day} monthDays={monthDays} >{this.props.content}{'\n' + this.props.day + '.' + this.props.month + '.'}</Event>
  }
}

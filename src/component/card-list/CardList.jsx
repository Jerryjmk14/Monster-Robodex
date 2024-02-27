import { Component } from "react";
import Card from "../card/Card";
import "./CardList.css";

export default class CardList extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="card-list">
        {this.props.monsterUsers.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

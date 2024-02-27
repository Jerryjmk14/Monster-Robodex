import { Component } from "react";
import CardList from "./component/card-list/CardList";
import Search from "./component/search/Search";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        // console.log(users);
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  render() {
    const onSearchHandler = (event) => {
      const searchString = event.target.value;
      this.setState(() => {
        return { searchQuery: searchString };
      });
    };

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchQuery);
    });

    const { monsters } = this.state;
    // console.log(this.state.props);
    return (
      <div className="app">
        <Search
          onSearch={onSearchHandler}
          placeHolder="Search Monster"
          className="search-box"
        />
        <CardList monsterUsers={filteredMonsters} />
      </div>
    );
  }
}

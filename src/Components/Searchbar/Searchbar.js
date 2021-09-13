import { Component } from 'react';

export class Searchbar extends Component {
  state = { request: 'home' };

  onChange = ({ target: { value } }) => {
    this.setState({ request: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handlerOnSubmit(this.state.request);
    this.setState({ request: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="request"
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}

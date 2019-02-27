import React from 'react'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <div>
        <h1>Whoops !</h1>
        <a href="/">Take me away</a>
        <p>
            {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </div>
    )
  }
}

export default Error

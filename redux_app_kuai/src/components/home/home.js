import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies, getMoreMovies } from '../../actions/index'
import './index.scss'
import BScroll from 'better-scroll'
import _ from 'loadsh'

class Home extends React.Component {
  state = {
    BS: '',
    count: 0,
    m: null
  }
  componentDidMount() {
    this.props.getMovies()
    let scrollBox = document.querySelector('.container')
    let scroll = new BScroll(scrollBox, {
      scrollY: true,
      click: true,
      pullUpLoad: {
        threshold: 100
      }
    })
    scroll.on('pullingUp', () => {
      const movieIds = this.props.movieslist.movieIds.slice(12)
      const ids = _.chunk(movieIds, 10)

      if (this.state.count == ids.length) {
        scroll.finishPullUp() // 必须告诉他拉动结束了
        return
      }

      if (this.state.count < ids.length - 1) {
        // this.showLoading()
        // setTimeout(() => {
        this.props.getMoreMovies(ids[this.state.count].join(','))
        this.setState({
          m: this.props.movieslist
        })
        // this.hideLoading()
        // }, 2000)
      }
      scroll.finishPullUp()
      this.state.count++
    })
  }

  shouldComponentUpdate() {
    return true
  }
  renderList() {
    if (this.props.movieslist) {
      return this.props.movieslist.movieList.map(item => {
        // console.log(this.props.movieslist.movieList)
        return (
          <li key={item.id}>
            <img src={this.imgFilter(item.img)} alt={item.nm} />
            <span>{item.nm}</span>
          </li>
        )
      })
    }
  }

  imgFilter = val => {
    let vals = val.replace('w.h', '128.180')
    return vals.replace('http', 'https')
  }

  render() {
    return (
      <div className="container">
        <ul className="movieslist_box">{this.renderList()}</ul>
      </div>
    )
  }
}

export default connect(
  state => {
    return { movieslist: state.homeReducer.movieslist }
  },
  dispatch => bindActionCreators({ getMovies, getMoreMovies }, dispatch)
)(Home)

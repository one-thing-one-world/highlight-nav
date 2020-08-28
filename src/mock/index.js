import Mock from 'mockjs'
import menu from '../data/data.json'

Mock.mock('/api/menu', 'get', {
  data: menu
})
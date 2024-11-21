import { createElement } from 'react'

export function UserFavoriteFoods() {
  return createElement(
    'section', 
    null, 
    <span>Favorite Foods:</span>,
    <br />,
    <ul>
      <li>Sushi</li>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  )
}
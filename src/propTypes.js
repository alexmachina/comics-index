import propTypes from 'prop-types'

export const menu = {
  brand : propTypes.shape({
    link: propTypes.string,
    text: propTypes.string
  }),
  items : propTypes.arrayOf(
    propTypes.shape({
      link: propTypes.string,
      text: propTypes.string
    }),

  ),
    onMenuVisibleToggle: propTypes.func,
    visible: propTypes.bool
}

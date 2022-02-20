const defaultProps = {
  page: '', // page in views/pages
  user: {}, // Session user
  props: {
    title: '',
    data: {},
    error: '',
  },
};

/**
 *
 * @param {*} res
 * @param {defaultProps} options
 */
const template = (res, options) => {
  res.render(res.indexPage ?? 'index', {
    ...defaultProps,
    ...options
  })
};

module.exports = template;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary,
  },
});

class TableFooter extends React.Component {
  getChildContext() {
    // eslint-disable-line class-methods-use-this
    return {
      table: {
        footer: true,
      },
    };
  }

  render() {
    const {
      children,
      classes,
      className: classNameProp,
      component: ComponentProp,
      ...other
    } = this.props;

    return (
      <ComponentProp className={classNames(classes.root, classNameProp)} {...other}>
        {children}
      </ComponentProp>
    );
  }
}

TableFooter.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

TableFooter.defaultProps = {
  component: 'tfoot',
};

TableFooter.childContextTypes = {
  table: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiTableFooter' })(TableFooter);

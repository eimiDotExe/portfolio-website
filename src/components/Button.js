import className from "classnames";


function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
    'border-cyan-100 bg-purple-200 text-fuchsia-300': primary,
    'border-pink-100 bg-rose-300 text-white': secondary,
    'border-cyan-100 bg-green-200 text-sky-400': success,
    'border-red-100 bg-amber-200 text-orange-400': warning,
    'border-black-100 bg-rose-600 text-white': danger,
    'rounded-full': rounded,
    // 'bg-white': outline,
    // 'text-fuchsia-300': outline && primary,
    // 'text-white': outline && secondary,
    // 'text-sky-400': outline && success,
    // 'text-orange-400': outline && warning,
    // 'text-white': outline && danger
    // ^^ not yassified
  });


  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning or danger can be true')
    }
  },
};


export default Button;
module.exports = function ({types: t}) {
  return {
    visitor: {
      CallExpression(path) {
        const consoleExpression = path.node.callee;

        if (consoleExpression  && consoleExpression.property && consoleExpression.object && consoleExpression.object.name === 'console') {
          path.remove();
        }
      }
    }
  };
};
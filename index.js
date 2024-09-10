module.exports.requestHooks = [
  (context) => {
    const shouldConfirm = context.request.getEnvironment()?.shouldConfirm;

    if (shouldConfirm) {
      const confirmed = window.confirm(
        "The following request should be confirmed. Do you want to proceed?"
      );
      if (!confirmed) {
        throw new Error("Request canceled by user.");
      }
    }
  },
];

// https://www.codewars.com/kata/implement-brute-force-protection/javascript

const bruteForceDetected = (() => {
  const failedAttemps = {};
  return loginReq => {
    if (loginReq.successful) {
      if (loginReq.sourceIP in failedAttemps) {
        failedAttemps[loginReq.sourceIP] = 0;
      }
      return false;
    }
    if (loginReq.sourceIP in failedAttemps) {
      const cnt = failedAttemps[loginReq.sourceIP] + 1;
      failedAttemps[loginReq.sourceIP] = cnt;
      return 20 <= cnt;
    }
    failedAttemps[loginReq.sourceIP] = 1;
    return false;
  };
})();

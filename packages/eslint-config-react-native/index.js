/**
 * strvcom/eslint-config-react-native
 *
 * @author      Petr Konecny <petr.konecny@strv.com>
 * @copyright   2016-present Expo, 2023-present STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

"use strict";

module.exports = {
  extends: ["universe/native"],
  rules: {
    "react-hooks/exhaustive-deps": "error",
  },
};

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeTokenProvider = void 0;

class FakeTokenProvider {
  generateToken(data) {
    return `dasgdghasfd-dasgd${data.user_id}`;
  }

}

exports.FakeTokenProvider = FakeTokenProvider;
const MTProto = require("@mtproto/core/envs/browser");
const { sleep } = require("@mtproto/core/src/utils/common");

class API {
  constructor() {
    this.mtproto = new MTProto({
      api_id: process.env.REACT_APP_API_ID,
      api_hash: process.env.REACT_APP_API_HASH,
      test: true,
    });
  }

  async call(method, params, options = {}) {
    try {
      const result = await this.mtproto.call(method, params, options);

      return result;
    } catch (error) {
      console.log(`${method} error:`, error);

      const { error_code, error_message } = error;

      if (error_code === 420) {
        const seconds = Number(error_message.split("FLOOD_WAIT_")[1]);
        const ms = seconds * 1000;

        await sleep(ms);

        return this.call(method, params, options);
      }

      if (error_code === 303) {
        const [type, dcIdAsString] = error_message.split("_MIGRATE_");

        const dcId = Number(dcIdAsString);

        // If auth.sendCode call on incorrect DC need change default DC, because
        // call auth.signIn on incorrect DC return PHONE_CODE_EXPIRED error
        if (type === "PHONE") {
          await this.mtproto.setDefaultDc(dcId);
        } else {
          Object.assign(options, { dcId });
        }

        return this.call(method, params, options);
      }

      return Promise.reject(error);
    }
  }
}

const api = new API();

api.mtproto.updates.on("updatesTooLong", (updateInfo) => {
  console.log("updatesTooLong:", updateInfo);
});

api.mtproto.updates.on("updateShortMessage", (updateInfo) => {
  console.log("updateShortMessage:", updateInfo);
});

api.mtproto.updates.on("updateShortChatMessage", (updateInfo) => {
  console.log("updateShortChatMessage:", updateInfo);
});

api.mtproto.updates.on("updateShort", (updateInfo) => {
  console.log("updateShort:", updateInfo);
});

api.mtproto.updates.on("updatesCombined", (updateInfo) => {
  console.log("updatesCombined:", updateInfo);
});

api.mtproto.updates.on("updates", (updateInfo) => {
  console.log("updates:", updateInfo);
});

api.mtproto.updates.on("updateShortSentMessage", (updateInfo) => {
  console.log("updateShortSentMessage:", updateInfo);
});

module.exports = api;

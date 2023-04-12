import api from "./api";

async function getUser() {
  try {
    const user = await api.call("users.getFullUser", {
      id: {
        _: "inputUserSelf",
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}

export function sendCode(phone) {
  return api.call("auth.sendCode", {
    phone_number: phone,
    settings: {
      _: "codeSettings",
    },
  });
}

function signIn({ code, phone, phone_code_hash }) {
  return api.call("auth.signIn", {
    phone_code: code,
    phone_number: phone,
    phone_code_hash: phone_code_hash,
  });
}

function signUp({ phone, phone_code_hash }) {
  return api.call("auth.signUp", {
    phone_number: phone,
    phone_code_hash: phone_code_hash,
    first_name: "MTProto",
    last_name: "Core",
  });
}

function getPassword() {
  return api.call("account.getPassword");
}

function checkPassword({ srp_id, A, M1 }) {
  return api.call("auth.checkPassword", {
    password: {
      _: "inputCheckPasswordSRP",
      srp_id,
      A,
      M1,
    },
  });
}

export async function loadUser() {
  const user = await getUser();

  const phone = "+14374730271";
  const code = "10130";

  if (!user) {
    const { phone_code_hash } = await sendCode(phone);

    try {
      const signInResult = await signIn({
        code,
        phone,
        phone_code_hash,
      });

      if (signInResult._ === "auth.authorizationSignUpRequired") {
        await signUp({
          phone,
          phone_code_hash,
        });
      }
    } catch (error) {
      if (error.error_message !== "SESSION_PASSWORD_NEEDED") {
        console.log(`error:`, error);

        return;
      }

      // 2FA

      const password = "USER_PASSWORD";

      const { srp_id, current_algo, srp_B } = await getPassword();
      const { g, p, salt1, salt2 } = current_algo;

      const { A, M1 } = await api.mtproto.crypto.getSRPParams({
        g,
        p,
        salt1,
        salt2,
        gB: srp_B,
        password,
      });

      const checkPasswordResult = await checkPassword({ srp_id, A, M1 });
    }
  }
  localStorage.setItem("access_hash", user.users[0].access_hash);
  localStorage.setItem("user_id", user.users[0].id);
  return user;
}

export function createChat(title) {
  return api.call("messages.createChat", {
    users: [
      {
        _: "inputUserSelf",
      },
    ],
    title,
  });
}

export function getChats(chatIds) {
  return api.call("messages.getChats", {
    id: chatIds,
  });
}

export function getAllChats() {
  return api.call("messages.getAllChats", {
    except_ids: [],
  });
}

export function getFullChat(chatId) {
  return api.call("messages.getFullChat", {
    chat_id: chatId,
  });
}

export function getState() {
  return api.call("updates.getState", {});
}

export function addChatUser(chat_id, user_id) {
  return api.call("messages.addChatUser", {
    chat_id,
    user_id,
  });
}

export function getUpdatesState() {
  return api.call("updates.getState", {});
}

export function getUpdatesDifference() {
  return api.call("updates.getDifference", {
    date: 1681038944,
    pts: 193,
  });
}

export function sendMessageToChat(chatId, message) {
  return api.call("messages.sendMessage", {
    clear_draft: true,
    peer: {
      _: "inputPeerChat",
      chat_id: chatId,
    },
    message: message,
    entities: [],

    random_id:
      Math.ceil(Math.random() * 0xffffff) + Math.ceil(Math.random() * 0xffffff),
  });
}

export function getMessages() {
  return api.call("messages.getMessages", {
    id: [
      {
        _: "inputMessageID",
        id: "100",
      },
    ],
  });
}

export function getHistory(chatId) {
  return api.call("messages.getHistory", {
    peer: {
      _: "inputPeerChat",
      chat_id: chatId,
    },
  });
}

export function getUserPhotos(userId) {
  return api.call("photos.getUserPhotos", {
    user_id: {
      _: "inputUser",
      user_id: userId,
    },
  });
}

export function downloadPhoto(userId, fileId) {
  return api.call("upload.getFile", {
    location: {
      _: "inputPeerPhotoFileLocation",
      peer: {
        _: "inputPeerUser",
        user_id: userId,
      },
      photo_id: fileId,
    },
    limit: 1024 * 1024,
  });
}

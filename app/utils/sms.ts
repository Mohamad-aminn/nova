import MelipayamakApi from "melipayamak";

const username = process.env.SMS_USERNAME;

// cant put $ in env for some reson
const password = process.env.SMS_PASSWORD + "$" + process.env.SMS_PASSWORD2;

const api = new MelipayamakApi(username, password);

const sms = api.sms();

export default sms;

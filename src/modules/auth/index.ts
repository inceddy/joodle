import Module from "../../module";
import AuthEmailModule from "./email";
import { Client } from "../../client";

/**
 * Functions relating to authentication in Moodle (specifically self-registration).
 */
export default class AuthModule extends Module {
  public email: AuthEmailModule;

  public constructor(client: Client) {
    super(client);
    this.email = new AuthEmailModule(client);
  }
}

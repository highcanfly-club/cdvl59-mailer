/** Copyright (c) 2024 Ronan Le Meillat
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 * This is a simple email forwarder for Cloudflare Workers.
 * It forwards emails to a list of recipients.
 * The list of recipients is defined in the environment variable RECIPIENTS.
 * Each recipient is separated by a pipe character "|".
 */
export interface Env {
	RECIPIENTS: string;
}

function getRecipients(flatString:string) {
	return flatString.split("|");
  }

export default {
	async email(message: ForwardableEmailMessage, env:Env, ctx: ExecutionContext) {
		const recipients = getRecipients(env.RECIPIENTS);
		const promised = [] as Promise<void>[];
		recipients.forEach((recipient) => {
		  promised.push(message.forward(recipient));
		  console.log(`Email forwarded to: ${recipient}`);
		});
		await Promise.allSettled(promised);
	  }
};


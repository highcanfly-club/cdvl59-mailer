# Cloudflare Email Forwarder for CDVL59

This is a simple email forwarder for Cloudflare Workers, developed for the Comité Départemental de Vol Libre du Nord (CDVL59), a decentralized organization of the Fédération Française de Vol Libre (FFVL).

## Features

- Forwards emails to a list of recipients.
- The list of recipients is defined in the environment variable `RECIPIENTS`.
- Each recipient is separated by a pipe character "|".

## Prerequisites

- The zone must have Cloudflare Email Routing activated.
- All the recipients must be verified using the Cloudflare dashboard.

## Deployment

1. **Create a Worker on Cloudflare**: Navigate to the Workers section on your Cloudflare dashboard and create a new Worker. Paste the provided TypeScript code into the Worker script.

2. **Set the `RECIPIENTS` environment variable**: In the Worker settings, add a new environment variable named `RECIPIENTS`. The value should be a pipe-separated list of email addresses.

3. **Deploy the Worker**: Click "Save and Deploy" to deploy the Worker.

## License

This software is released under the MIT License. See https://opensource.org/licenses/MIT for more details.

## Author

Ronan Le Meillat, 2024

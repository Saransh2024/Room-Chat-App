## Demo

https://room-chat-app-saransh.netlify.app/

# Room-Chat-Application

- **Data:** PostgeSQL managed by [Supabase](https://supabase.io/) [@supabase_io](https://twitter.com/supabase_io) (awsome real-time API).
- **Front-end**: React + Vite
- **UI library**: [chakra-ui](https://chakra-ui.com/) [@chakra_ui](https://twitter.com/chakra_ui)
- **Hosting**: [Netlify](https://www.netlify.com/)
- Country flags from [Flagpedia](https://flagpedia.net)

## Install

`npm install` to setup dependencies

## Supabase variables

Create a `.env` file with `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY` (see env.example)

## Setup your Supabase project

The following database table is required:

| Field            | Type      |
| ---------------- | --------- |
| id               | BIGINT    |
| username         | VARCHAR   |
| text             | TEXT      |
| country          | VARCHAR   |
| is_authenticated | BOOLEAN   |
| timestamp        | timestamp |



## Setup Google authentication (optional)

Follow instrunction [here](https://supabase.com/docs/guides/auth/social-login/auth-google)

## Dev

`npm run dev` to run server on port 3000

## Build

`npm run build` to build the react client



# Room-Chat-App

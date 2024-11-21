## Vite micro-frontends using Module Federation

**These folders contain four different services, so you need to open each service in a new terminal and enter these commands in the terminal of each service**

To start each service, you must install modules if it needs. Open each service in a new terminal and enter the command `npm ci`

And then enter the command `npm run dev` for each service to run it

You can test it:

1. Open the first-app using the link http://localhost:5002/ 
2. You can switch between services using sidebar buttons
3. You can change the text of any button in the sidebar-app and it automatically changes in the first-app, to-dos-ui-mf and in second-app too

So, we have a service that implements a sidebar (sidebar-app), and three services between which the sidebar switches us (first-app, second-app and to-dos-ui-mf). Instead of repeating the sidebar in each of these three services, we implement it separately and pass the sidebar module into every one of them

The following guide was used for setting up:
https://module-federation.io/guide/start/quick-start.html
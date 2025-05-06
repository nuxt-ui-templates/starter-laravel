import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createSSRApp, DefineComponent, h } from 'vue'
import { route as ziggyRoute, Config } from 'ziggy-js'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel Starter Template'

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ App, props, plugin }) {
      const app = createSSRApp({ render: () => h(App, props) })

      // Configure Ziggy for SSR...
      const ziggyConfig = {
        ...(page.props.ziggy as Config),
        location: new URL((page.props.ziggy as { location: string }).location)
      }

      // Create route function...
      const route = ((name?: string, params?: any, absolute?: boolean) => {
        if (!name) return ziggyRoute(undefined, undefined, absolute, ziggyConfig)
        return ziggyRoute(name, params, absolute, ziggyConfig)
      }) as {
        (): any;
        (name: string, params?: any, absolute?: boolean): string;
      }

      // Make route function available globally...
      app.config.globalProperties.route = route

      // Make route function available globally for SSR...
      if (typeof window === 'undefined') {
        // @ts-expect-error - This is a global variable
        global.route = route
      }

      app.use(plugin)

      return app
    }
  })
)

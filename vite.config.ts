import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname,'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build:{
        outDir,
        emptyOutDir:true,
        rollupOptions: {
            input:{
                main: resolve(root, 'index.html'),
                "about": resolve(root, 'about', 'index.html'),
                "catalog": resolve(root, 'catalog', 'index.html'),
                "sign-up": resolve(root, 'sign-up', 'index.html'),
                "login": resolve(root, 'login', 'index.html'),
                "admin-profile": resolve(root, 'admin-profile', 'index.html'),
                "user-profile": resolve(root, 'user-profile', 'index.html'),
                "shop-cart-products": resolve(root, 'shop-cart-products', 'index.html'),
            }
        },
        target: 'esnext'
    }
})
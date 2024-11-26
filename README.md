## Init react 
    npm init -y

## PARCEL
- has it's own dependency
- can have nested dependency (transient dependency)
- is a bunch of dependencies
- Dev Build
- Local server
- HMR (Hot module replacement) - updates page on save
- File watching algorithm - written in c++
- caching - faster builds
- Image optimization
- bundling (npx parcel build <entrypoint_file>) - remove main attribute from package.json
- compressing
- consistent hashing
- code splitting
- Differential building - to support multiple browsers (and old browsers)
- Diagnostic
- Error handling
- parceljs.org - documentation
- Https (--https flag to enable)
- Tree shaking - remove unwanted code
```
npm install -D parcel 
(here -D means dev dependency)
```

```
npx parcel <entrypoint-file>
(this will start code as a local server, npx - executing package)
```

### what is package-lock.json (auto-generated)
- kind of like a metadata file
- keep tracks of all version
- to avoid any discrepancy between version on local machine and production 

### JSX
- not html but a html like syntax
- transpiled before it reaches JS
- transpiled by parcel - babel

### Babel
- opensource javascript compiler

### React component
- class component - old way of writing code
- functional component - new way of writing code
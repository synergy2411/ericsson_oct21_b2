# Github Repo Link : https://github.com/synergy2411/ericsson_oct21_b2

# What is JavaScript?
- Scripting language
- runs on browser (Client side JS)
- runs on Server (Server side JS - Node Runtime Environment)
- dynamic 
- earlier known as LiveScript
- making Web-page interactive
- Single-threaded (Web-workers)
- Object based
- light-weight
- script enabled
- Non-blocking / Asynchronous : Ember, Angular, React, VueJS, Backbone, knockout, D3, jQuery etc 
- Vanilla JS

# Functions - Callback, HOF, Nested Functions, Function Hoisting, Constructor, IIFE
# Prototype - 
# Closures, Scope chaining, Lexical scope


# What is ES6?
- ECMA specification for latest JS
- ES6 / ES2015
- Class
- Rest/Spread
- let/const
- Arrow functions
- Modules import/export
- Destructuring
- Map/Set
- Template Literals
- Promise
- Observables - RxJS, RxJava, RxSwift, Rx.Net - Reactive Extension - NOT PART OF JAVASCRIPT SPECIFICATION










# Node Installer
- Node Runtime Environment
- Node Package Manager
- Node Native Module


Java - JVM
.Net - CLR

Browser - Engines -> 

ECMA Specification 



# Prototype Chaining

- Object (toString(), constructor, hasOwnProperty, isPrototypeOf etc)
    - String (charAt(), indexOf(), length, substring() etc)
        - str.length
    - Number (toFixed(), isNan())
    - Function (name, bind(), call(), apply())
    - Array (push, pop, forEach, every, find etc)
    - Date (setDate, getDate)
    - Custom Object
    - Person (firstName, lastName, sayHello())
        - foo.sayHello()


# Async Code -
- Callbacks
- Promises
- Async...await
- Observable



# to install nodemon - > npm install nodemon -g




# What is React ?
- Client-side JavaScript Library
- Can create Single Page App
- Interactive UI
- light-weight
- Fast, Efficient
- Components based (reusable piece of code)
- Creates UI
- Virtual DOM
- 

# Framework / Library
- Angular* - Framework, set of API to follow; combo of various libraries - 
    : package.json -> rxjs, zonejs, @angular/core, @angular/forms etc
    : Enterprise level app
    : HttpClientModule
    : Service
    : Built-in Validators
    : MVC
    : 2 way data binding ; built-in [(ngModel)]
    : Heavy framework;
    : AoT Compilation
    : Tree-shaking
    : Ivy
    : ngcc


- React - Library - Fast, Efficient for UI Update, 'View' Part of MVC, 
    : jQuery, axios etc
    : Redux, Flux
    : Form Validation
    : React router

- jQuery - Library - DOM Manipulation, AJAX Call, Animation
- VueJS - Evan You; Virtual DOM, Declarative Approach, Components, State Management (vuex)
- Polymer - Custom components
- BackboneJS - client side MVC
- Knockout - MVVM, 2 way data binding
- Ember* - Framework; Frequent API changes





# Angular Testing
- TestBed
- Fixture
- CompInstance
- DebugElement
- HttpClientTestingModule
- HttpTestingController
- RouterTestingModule
- Deep / Shallow Testing
- E2E Tests

# Karma, Jasmine, Protector

# Jest, Enzyme -> Jasmine API's Specs, spyOn

# to create react project
> npx create-react-app notes-app
> cd notes-app
> npm start

# to install bootstrap
> npm install bootstrap@4

# Real DOM
html
    head
        title
        script
        meta
    body
        div
            p
            ul
                li

# Virtual DOM - does not exist, in memory, only JS,

-> Component -> JSX -> JavaScript -> Virtual DOM -> Real DOM 
    -> Model change -> Current VDOM -> Prev VDOM -> Real DOM


# Props - way of component (Parent & Child) communication

# Atomic Design - Web designing
- Atom - Smallest unit eg. a button, an input, a link etc
- Molecules - Combo of atoms eg. searchbar -> inputbox + button
- Organism - Combo of molecules eg. navbar -> multiple links + search bar
- Templates - Combo of organism eg. Registration Form
- Pages - complete page

# Thinking in React way
# Lifting-up the state
# Nested Child Component Communication
# Managing the State - Component level
# User Input
# Props & State

# Component Types (prior to v16.8)
- Functional Component - Presentational | Stateless | Dump
- Class based component - Container | Stateful | Smart

# Hooks
- useState()
- useEffect() - componentDidMount | componentDidUpdate | componentWillUnmount,
- useReducer()
- UseContext()
- useParams()


# Main job of React Library -> to render the UI, if model changes, update the UI accordingly.
# Side Effect - XHR Call, reading, writing, changing the state etc

# Formik - npm install formik
    - Validating the form controls
    - API for displaying messages

# Ref - read the data from DOM
# State - setState() - re-renders the UI


# useEffect()
- useEffect(CallbackFn) - (componentDidUpdate)
    : executes after initial rendering and if state change, re-executes again for each state change

- useEffect(CallbackFn, []) - (componentDidMount)
    : executes only after initial rendering

- useEffect(CallbackFn, [deps])
    : executes after initial rendering, if dependency changed, useEffect will re-execute.

- useEffect() => () = clean up Function (componentWillUnmount)
    : Clean-up will NOT fire after initial rendering
    : Clean-up function will fire after initial rendering, before the useEffect() callback for subsequent changes
    : Always Executes prior to unmount the component


# useReducer() - to manage complex state in single component
    - Redux -> Actions -> Reducer -> State

# Context API - eliminate "Props drilling"
Parent -> Child1 => Child2 => Child3 => Child4 =>  

# useContext() - Consume the Context API

# When to use context vs props ?



# Routing

# SPA
 - Single Page App
 - Better user experience / Interactive UI
 - Don't reload / refresh browser
 - Fast
 - Less network traffic
 - Page content changes depending in present URL

- React | Angular | Vue | jQuery (AJAX - XMLHTTPRequest - Async Calls)
- Javascript is Single Threaded -> XHR -> 2/3s


 http://www.our-domain.com/notes => NotesComp
 http://www.our-domain.com/posts => PostsComp
 http://www.our-domain.com/posts?key=value


 # React Router Terminologies -
 - BrowserRouter : to enable routing
 - Route : configure the component, if route changes
 - Link / NavLink - Do not reload the browser
 - useLocation() -> Snapshot of active URL
 - History -> HTML History object wrapper; navigate pages
 - useParams() -> accessing the route paramter
 - Redirect -> redirects user to other URL
 - Prompt - prevent the accidental navigation

 # React-Router-DOM > npm install react-router-dom


 # to generate package.json > npm init
## Couch Potato Movie Finder
A tdd/bdd based development utilizing [themoviedb.org](https://www.themoviedb.org/) API

### Testing Library
---

[react-testing-library](https://github.com/kentcdodds/react-testing-library)

`Dependencies`
> dom-testing-library

### Personal Goal
Have a feel with TDD/BDD and compare enzyme with react-testing-library

### Requirement
`Node 8.0+`

### Installation
`npm install`

### Test
`npm run test`

### Misc
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

---

### TIL (Today I learned)
> 12.13.18

`Spying on console.log/error/warn`

```
global.console = {
  warn: jest.fn(),
  log: jest.fn(),
  error: jest.fn()
}
...
it('then should break if there is no onSubmit props function', () => {
  renderIntoDocument(<Form/>)
  expect(console.error).toHaveBeenCalledTimes(1);
})

```
![progress](https://cdn.pbrd.co/images/HpHaxWP.png)

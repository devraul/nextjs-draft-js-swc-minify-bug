# NextJS + Draft-JS + SWC Minify Bug

## Specs

- Next 12.0.2
- draft-js 0.11.7
- node 14.17.6

## Prepare

1. Clone this repo
2. yarn install

## Working case

1. yarn dev
2. open http://localhost:3000
3. type something on the editor
4. everything will works

## Bug case

1. yarn build && yarn start
2. open http://localhost:3000
3. type something
4. an error will appear

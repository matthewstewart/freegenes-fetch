const fetch = require('node-fetch');

async function getCollections() {
  const res = await fetch('https://api.freegenes.org/collections/');
  return res.json();
}

async function getCollection(id) {
  const res = await fetch(`https://api.freegenes.org/collections/${id}`);
  return res.json();
}

async function getFullCollection(id) {
  const res = await fetch(`https://api.freegenes.org/collections/full/${id}`);
  return res.json();
}

async function getRecursiveCollection(id) {
  const res = await fetch(`https://api.freegenes.org/collections/recurse/${id}`);
  return res.json();
}

async function getCollectionParts(id) {
  const res = await fetch(`https://api.freegenes.org/parts/collection/${id}`);
  return res.json();
}

async function getParts() {
  const res = await fetch('https://api.freegenes.org/parts/');
  return res.json();
}

async function getPart(id) {
  const res = await fetch(`https://api.freegenes.org/parts/${id}`);
  return res.json();
}

async function getFullPart(id) {
  const res = await fetch(`https://api.freegenes.org/parts/full/${id}`);
  return res.json();
}

module.exports = {
  getCollections, getFullCollection, getRecursiveCollection, getCollection, getCollectionParts,
  getParts, getPart, getFullPart
};
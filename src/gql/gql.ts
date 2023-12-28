/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetCatogories {\n    categories {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n": types.GetCatogoriesDocument,
    "\n  query GetServiceForPriceList {\n    services {\n      data {\n        id\n        attributes {\n          title\n          preview_description\n          price\n        }\n      }\n    }\n  }\n": types.GetServiceForPriceListDocument,
    "\n  query GetServicesShort($page: Int, $pageSize: Int) {\n    services(pagination: { page: $page, pageSize: $pageSize }) {\n      data {\n        attributes {\n          title\n          slug\n          preview_image {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          category {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n        }\n      }\n      meta {\n        pagination {\n          page\n          pageSize\n          pageCount\n          total\n        }\n      }\n    }\n  }\n": types.GetServicesShortDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCatogories {\n    categories {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCatogories {\n    categories {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetServiceForPriceList {\n    services {\n      data {\n        id\n        attributes {\n          title\n          preview_description\n          price\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetServiceForPriceList {\n    services {\n      data {\n        id\n        attributes {\n          title\n          preview_description\n          price\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetServicesShort($page: Int, $pageSize: Int) {\n    services(pagination: { page: $page, pageSize: $pageSize }) {\n      data {\n        attributes {\n          title\n          slug\n          preview_image {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          category {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n        }\n      }\n      meta {\n        pagination {\n          page\n          pageSize\n          pageCount\n          total\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetServicesShort($page: Int, $pageSize: Int) {\n    services(pagination: { page: $page, pageSize: $pageSize }) {\n      data {\n        attributes {\n          title\n          slug\n          preview_image {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          category {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n        }\n      }\n      meta {\n        pagination {\n          page\n          pageSize\n          pageCount\n          total\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
#!/bin/bash

PROTO_DIR=./proto
GEN_DIR=./src/generated

# Generate JavaScript code
# install package
#   grpc-tools
# Documentation for protocol buffers
#   https://developers.google.com/protocol-buffers/docs/reference/javascript-generated#commonjs-imports
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${GEN_DIR} \
    --grpc_out=${GEN_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto

# Generate TypeScript code (d.ts)
# Install two packages
#   grpc_tools_node_protoc_ts
#   @types/google-protobuf
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${GEN_DIR} \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto
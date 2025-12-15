#!/bin/bash

# Only build on main branch
if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]] ; then
  # Proceed with the build
  echo "✅ Building on main branch"
  exit 1;
else
  # Don't build
  echo "🛑 Not main branch, skipping build"
  exit 0;
fi

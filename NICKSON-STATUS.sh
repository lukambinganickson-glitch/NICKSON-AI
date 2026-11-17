#!/bin/bash

echo "========== NICKSON AI =========="

if [ -f package.json ]; then
  echo "PROJECT: FOUND"
else
  echo "PROJECT: NOT FOUND"
fi

if [ -f src/app/page.tsx ]; then
  echo "CHAT PAGE: FOUND"
else
  echo "CHAT PAGE: MISSING"
fi

if [ -f src/app/api/chat/route.ts ]; then
  echo "AI API: FOUND"
else
  echo "AI API: MISSING"
fi

if [ -f src/lib/supabase/server.ts ]; then
  echo "DATABASE CONNECTION: FOUND"
else
  echo "DATABASE CONNECTION: MISSING"
fi

if [ -f src/app/dashboard/page.tsx ]; then
  echo "DASHBOARD: FOUND"
else
  echo "DASHBOARD: MISSING"
fi

echo "========== END =========="

# سیگنال زنده — وایت‌پیپر
## بخش ۴۱: API اعتبارسنج وفاداری (استاندارد RANJ-1)

**نویسنده:** امیر احمدی (@x@) · **تاریخ:** ۱۳ خرداد ۱۴۰۵ · **وضعیت:** نهایی

---

### ۴۱.۱ نقطهٔ پایانی
`POST /v1/validate`

### ۴۱.۲ درخواست
```json
{
  "user_address": "0x...",
  "action_type": "github_commit",
  "action_data": { … },
  "tribe_symbol": "@x@"
}
```

### ۴۱.۳ پاسخ
```json
{
  "status": "approved",
  "ranj_score": 85,
  "tap_earned": 425,
  "certificate_nft": "0x..."
}
```
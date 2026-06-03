# سیگنال زنده — وایت‌پیپر
## بخش ۴۲: Bridge SDK (TypeScript)

**نویسنده:** امیر احمدی (@x@) · **تاریخ:** ۱۳ خرداد ۱۴۰۵ · **وضعیت:** نهایی

---

### ۴۲.۱ نصب
`npm install @tribes/bridge-sdk`

### ۴۲.۲ کلاس‌های اصلی
`ShahnamehBridgeSDK` — اتصال به قراردادها، پرس‌وجوی امتیازات وفاداری، مدیریت پل‌ها.

### ۴۲.۳ مثال
```typescript
const sdk = new ShahnamehBridgeSDK(provider, trAddress, svAddress, bnAddress);
const tribe = await sdk.getTribe("@x@");
const score = await sdk.getLoyaltyScore(address, "@x@");
```
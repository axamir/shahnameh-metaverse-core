# سیگنال زنده — وایت‌پیپر
## بخش ۳۸: RanjBondMarket.sol — صدور و معاملهٔ اوراق

**نویسنده:** امیر احمدی (@x@) · **تاریخ:** ۱۳ خرداد ۱۴۰۵ · **وضعیت:** نهایی

---

### ۳۸.۱ هدف
`RanjBondMarket.sol` به اعضا امکان می‌دهد توزیع‌های آیندهٔ خزانه را به عنوان اوراق bTAP توکن‌سازی کنند و برای نقدینگی فوری معامله نمایند.

### ۳۸.۲ توابع اصلی
```solidity
function mintBond(uint256 _tapAmount) external returns (uint256 bondId);
function redeemBond(uint256 _bondId) external;
function getBondPrice(uint256 _bondId) external view returns (uint256);
```

### ۳۸.۳ فرمول تنزیل
`قیمت_bTAP = ارزش_اسمی × (۱ − δ × (t_باقی‌مانده / t_کل))`
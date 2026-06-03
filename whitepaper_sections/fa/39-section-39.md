# سیگنال زنده — وایت‌پیپر
## بخش ۳۹: AntiWhale.sol — سقف خرید و رأی‌گیری Quadratic

**نویسنده:** امیر احمدی (@x@) · **تاریخ:** ۱۳ خرداد ۱۴۰۵ · **وضعیت:** نهایی

---

### ۳۹.۱ هدف
`AntiWhale.sol` دفاع‌های ساختاری در برابر حملات حکمرانی را اعمال می‌کند.

### ۳۹.۲ توابع اصلی
```solidity
function checkPurchaseLimit(address _buyer, uint256 _amount) external view returns (bool);
function getVotingPower(address _member, string memory _tribeSymbol) external view returns (uint256);
```

### ۳۹.۳ محدودیت‌ها
- سقف خرید روزانه: ۱۰۰ TAP
- قدرت رأی = sqrt(TAP نگهداری‌شده × امتیاز وفاداری)
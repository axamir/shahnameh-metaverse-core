# سیگنال زنده — وایت‌پیپر
## بخش ۳۴: BridgeNFT.sol — مشخصات کامل

**نویسنده:** امیر احمدی (@x@)
**ORCID:** 0009-0000-0614-6869
**تاریخ:** ۱۳ خرداد ۱۴۰۵
**وضعیت:** نهایی — تغییرناپذیر

---

### ۳۴.۱ هدف

`BridgeNFT.sol` NFTهای سول‌باند (غیرقابل انتقال) را ضرب می‌کند که نمایندهٔ پل یک عضو بین دو تبار هستند.

---

### ۳۴.۲ توابع اصلی

```solidity
function mintBridge(address _entity, string memory _fromTribe, string memory _toTribe, string memory _metadataURI) external onlyMinter returns (uint256);
function ownerOf(uint256 tokenId) external view returns (address);
function balanceOf(address owner_) external view returns (uint256);
function tokenURI(uint256 tokenId) external view returns (string memory);
```

---

### ۳۴.۳ ویژگی سول‌باند

تابع `transferFrom` بازنویسی شده تا همیشه برگشت بخورد: `"BridgeNFT is soulbound: transfers not allowed"`. این تضمین می‌کند که پل‌ها به‌طور دائمی با آدرس عضو اصلی مرتبط هستند.

---

### ۳۴.۴ متادیتا

پارامتر `_metadataURI` یک لینک دائمی IPFS ذخیره می‌کند که شامل جزئیات پل، از جمله امتیاز وفاداری عضو در زمان پل زدن است.

---

*در بخش بعدی، RanjOracle.sol را مشخص می‌کنیم.*

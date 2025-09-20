"use strict";
if (confirm("Почати тестування?")) {
  const siteList = [
    {
      companyName: "SkyNetix",
      companyOwner: "Mykhailo Kravchuk",
      sponsors: [
        {
          lastName: "Tymoshenko",
          firstName: "Viktoriya",
          investmentAmount: 28000,
        },
      ],
      releaseYear: 2002,
      price: 16000,
    },
    {
      companyName: "SkyNetix",
      companyOwner: "Mykhailo Kravchuk",
      sponsors: [
        {
          lastName: "Yevtushenko",
          firstName: "Liliya",
          investmentAmount: 80000,
        },
        { lastName: "Mazurenko", firstName: "Oksana", investmentAmount: 45000 },
      ],
      releaseYear: 2008,
      price: 75000,
    },
    {
      companyName: "NovaTech",
      companyOwner: "Yuriy Bondar",
      sponsors: [
        { lastName: "Khmil", firstName: "Oksana", investmentAmount: 5000 },
        { lastName: "Rudenko", firstName: "Denys", investmentAmount: 8000 },
        { lastName: "Stasenko", firstName: "Iryna", investmentAmount: 2000 },
      ],
      releaseYear: 2018,
      price: 9000,
    },
    {
      companyName: "NovaTech",
      companyOwner: "Yuriy Bondar",
      sponsors: [
        { lastName: "Zhuk", firstName: "Roman", investmentAmount: 15000 },
      ],
      releaseYear: 2019,
      price: 8000,
    },
    {
      companyName: "NovaTech",
      companyOwner: "Yuriy Bondar",
      sponsors: [
        { lastName: "Lysenko", firstName: "Iryna", investmentAmount: 60000 },
        { lastName: "Horbenko", firstName: "Taras", investmentAmount: 15000 },
      ],
      releaseYear: 2021,
      price: 25000,
    },
    {
      companyName: "DevNest",
      companyOwner: "Svitlana Tkachuk",
      sponsors: [
        {
          lastName: "Melnychenko",
          firstName: "Oleksandr",
          investmentAmount: 42000,
        },
      ],
      releaseYear: 2024,
      price: 23000,
    },
    {
      companyName: "DevNest",
      companyOwner: "Volodymyr Sydorenko",
      sponsors: [
        {
          lastName: "Kovalchuk",
          firstName: "Natalia",
          investmentAmount: 55000,
        },
        { lastName: "Drobot", firstName: "Yevhen", investmentAmount: 60000 },
      ],
      releaseYear: 2025,
      price: 77000,
    },
  ];
  // 1) загальна вартість усіх сайтів
  /**
   * Обчислює загальну вартість усіх сайтів у списку.
   * @param siteList Масив сайтів
   * @returns Сума всіх значень поля `price`
   */
  const totalSitePrice = siteList.reduce(
    (total, site) => total + site.price,
    0
  );
  document.write(`1)загальна вартість сайтів = ${totalSitePrice} <br>`);
  // =====================================================================================
  // 2) кількість сайтів, що було зроблено між 2000 та 2009 р.
  /**
   * Рахує кількість сайтів, створених у період з 2000 по 2008 рік включно.
   * @param siteList Масив сайтів
   * @returns Кількість сайтів у заданому діапазоні років
   */
  const sitesNumber = siteList.reduce(
    (prevNum, site) =>
      site.releaseYear >= 2000 && site.releaseYear < 2009
        ? prevNum + 1
        : prevNum,
    0
  );
  document.write(
    `2)кількість сайтів, що було зроблено між 2000 та 2009 р. : ${sitesNumber} <br>`
  );
  // =====================================================================================
  // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000.
  /**
   * Рахує кількість сайтів, де загальна сума спонсорських вкладень перевищує 100000.
   * @param siteList Масив сайтів
   * @returns Кількість таких сайтів
   */
  const sitesCount = siteList.reduce((count, site) => {
    const siteInvestment = site.sponsors.reduce(
      (investmentSum, sponsor) => investmentSum + sponsor.investmentAmount,
      0
    );
    return siteInvestment > 100000 ? count + 1 : count;
  }, 0);
  document.write(
    `3)кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${sitesCount} <br>`
  );
  // =====================================================================================
  // 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
  /**
   * Створює об'єднаний список усіх спонсорів з усіх сайтів.
   * @param siteList Масив сайтів
   * @returns Масив об'єктів типу Sponsor
   */
  const allSponsors = siteList.reduce((acc, site) => {
    return acc.concat(site.sponsors);
  }, []);
  document.write("4)загальний список усіх спонсорів :");
  allSponsors.forEach((sponsor) => {
    document.write(` ${sponsor.firstName} ${sponsor.lastName},`);
  });
  // =====================================================================================
  // 5) знайти рік, коли прибуток був найбільшим
  /**
   * Знаходить сайт з найбільшою вартістю (`price`) і повертає його рік випуску.
   * @param siteList Масив сайтів
   * @returns Рік сайту з найбільшим прибутком
   */
  const maxPriceSite = siteList.reduce((maxSite, site) => {
    return site.price > maxSite.price ? site : maxSite;
  });
  const maxPriceYear = maxPriceSite.releaseYear;
  document.write(
    `<br> 5)рік, коли прибуток був найбільшим : ${maxPriceYear} <br>`
  );
  // =====================================================================================
  // 6) упорядкувати список за спаданням прибутку
  /**
   * Повертає новий масив сайтів, відсортований за спаданням значення `price`.
   * @param siteList Масив сайтів
   * @returns Відсортований масив сайтів
   */
  const rotationProfitList = siteList.slice().sort((a, b) => b.price - a.price);
  document.write("6)список за спаданням прибутку:<br>");
  rotationProfitList.forEach((site) => {
    document.write(
      `${site.companyName}(${site.releaseYear}) — ${site.price}<br>`
    );
  });
  // =====================================================================================
  // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
  const highValueSites = [];
  const lowValueSites = [];
  /**
   * Розділяє сайти на дві групи: з вартістю менше 10000 і більше 10000.
   * @param siteList Масив сайтів
   * @returns Два масиви: `lowValueSites` і `highValueSites`
   */
  siteList.forEach((site) => {
    if (site.price < 10000) {
      lowValueSites.push(site);
    } else {
      highValueSites.push(site);
    }
  });
  document.write("<hr>");
  document.write("7)cайти з вартістю до 10000:<br>");
  lowValueSites.forEach((site) => {
    document.write(`${site.companyName}
 (${site.releaseYear}) — ${site.price}<br>`);
  });
  document.write("<hr>");
  document.write("7)cайти з вартістю більше 10000:<br>");
  highValueSites.forEach((site) => {
    document.write(
      `${site.companyName} (${site.releaseYear}) — ${site.price}<br>`
    );
  });
}

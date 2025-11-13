{
  // generic wtih interface
  interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
      brand: string;
      model: string;
      releaseYear: string;
    };
    smartWatch: T;
    bike?: X;
  }
  interface BrandSaraSmartWatch {
    heartRate: boolean;
    stopWatch: boolean;
    price: string;
  }
  const poorDeveloper: Developer<
    BrandSaraSmartWatch,
    {
      brand: string;
    }
  > = {
    name: "asif",
    salary: 2134,
    device: {
      model: "s24",
      brand: "Samsung",
      releaseYear: "2025",
    },
    smartWatch: {
      heartRate: true,
      stopWatch: true,
      price: "4662",
    },
  };
  const richDeveloper: Developer<
    {
      heartRate: boolean;
      stopWatch: boolean;
      price: string;
      callSuppoprt: boolean;
      AiFeature: boolean;
    },
    {
      brand: string;
    }
  > = {
    name: "asif",
    salary: 2134,
    device: {
      model: "g96",
      brand: "Motorola",
      releaseYear: "2025",
    },
    smartWatch: {
      heartRate: true,
      stopWatch: false,
      price: "4662",
      AiFeature: true,
      callSuppoprt: true,
    },
    bike: {
      brand: "yamaha",
    },
  };
}

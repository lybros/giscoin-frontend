export class ChartsMock {
  public sinAndCos() {
    let sin = [],
        sin2 = [],
        cos = [],
        rand = [],
        rand2 = []
        ;
    for (let i = 0; i < 100; i++) {
        sin.push({ x: i, y: i % 10 == 5 ? null : Math.sin(i/10) });
        sin2.push({ x: i, y: Math.sin(i/5) * 0.4 - 0.25 });
        cos.push({ x: i, y: .5 * Math.cos(i/10) });
        rand.push({ x:i, y: Math.random() / 10 });
        rand2.push({ x: i, y: Math.cos(i/10) + Math.random() / 10 })
    }
    return [
        {
            area: true,
            values: sin,
            key: "Sine Wave",
            color: "#ff7f0e",
            strokeWidth: 4,
            classed: 'dashed'
        },
        {
            values: cos,
            key: "Cosine Wave",
            color: "#2ca02c"
        },
        {
            values: rand,
            key: "Random Points",
            color: "#2222ff"
        },
        {
            values: rand2,
            key: "Random Cosine",
            color: "#667711",
            strokeWidth: 3.5
        },
        {
            area: true,
            values: sin2,
            key: "Fill opacity",
            color: "#EF9CFB",
            fillOpacity: .1
        }
    ];
  }

  public pieChartData = [
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ];

  public barChartData = [
    {
      key: "sdadasd",
      values: [
        {
          "label" : "A" ,
          "value" : -29.765957771107
        },
        {
          "label" : "B" ,
          "value" : 0
        },
        {
          "label" : "C" ,
          "value" : 32.807804682612
        },
        {
          "label" : "D" ,
          "value" : 196.45946739256
        },
        {
          "label" : "E" ,
          "value" : 0.19434030906893
        },
        {
          "label" : "F" ,
          "value" : -98.079782601442
        },
        {
          "label" : "G" ,
          "value" : -13.925743130903
        },
        {
          "label" : "H" ,
          "value" : -5.1387322875705
        }
      ]
    }
  ];
}

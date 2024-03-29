var years = [1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];

var jobDescriptions = {
	"Construction trades": {
		"description": "Occupations in this major group are primarily concerned with carpentry, plumbing, pipefitting, masonry, plastering, cement finishing, tile setting, roofing, glazing, painting, insulating, and installing floorcovering. Electrical trades are classified in major group H2 - Stationary Engineers, Power Station Operators and Electrical Trades and Telecommunications Occupations.",
		"salary": "<h3>Construction Trades Helpers and Labourers</h3>Starting <strong>$16.39</strong><br>Most Frequent <strong>$20.51</strong><br>Maximum <strong>$25.96</strong><br>Average Full-time hours <strong>42.3</strong><br>&#37; Employed Full-time <strong>94.3&#37;</strong><br>&#37; of Employers reporting hiring difficulties <strong>8.8&#37;</strong><br>&#37; of employers reporting vacancies greater than 4 months <strong>29.6&#37;</strong><br><br><h3>Construction Millwrights and Industrial Mechanics</h3>Starting <strong>$30.00</strong><br>Most Frequent <strong>$32.79</strong><br>Maximum <strong>$33.17</strong><br>Average Full-time hours <strong>38.9</strong><br>&#37; Employed Full-time <strong>99.3&#37;</strong><br>&#37; of Employers reporting hiring difficulties <strong>6.3&#37;</strong><br>&#37; of employers reporting vacancies greater than 4 months <strong>11.8&#37;</strong>"
	}
};


var jobs = {
"Management occupations": {
"men": [739.4,782.3,774.4,793.5,823.0,790.4,813.9,805.6,868.0,848.9,859.2,839.5,885.6,916.3,870.5,894.3,879.5,914.8,930.5,959.7,945.3,1001.9,966.2,964.2],
"women": [317.8,352.8,364.3,411.5,413.6,432.5,437.2,449.8,471.9,497.7,499.8,521.9,479.5,502.4,466.3,459.3,488.4,526.8,518.6,543.3,552.2,563.2,566.5,561.2]
},
"Senior management occupations": {
"men":[55.2,56.7,52.8,57.3,52.4,53.4,58.2,57.5,56.5,51.9,56.1,60.8,60.3,68.3,54.0,52.4,60.3,81.7,69.0,67.4,62.5,54.6,56.4,52.7],
"women":[14.7,15.0,14.8,20.1,19.1,23.2,18.2,20.8,19.0,19.4,20.8,23.5,23.6,18.0,17.1,17.9,20.0,23.2,21.7,24.1,22.2,22.9,26.0,24.6]
},
"Other management occupations": {
"men":[684.2,725.5,721.5,736.2,770.6,737.0,755.7,748.1,811.5,797.0,803.0,778.8,825.3,847.9,816.5,841.9,819.1,833.1,861.5,892.3,882.8,947.3,909.8,911.5],
"women":[303.1,337.8,349.5,391.5,394.5,409.3,419.0,429.0,452.9,478.4,478.9,498.4,455.9,484.4,449.2,441.4,468.4,503.7,496.9,519.1,530.0,540.3,540.4,536.6]
},
"Business, finance and administrative occupations": {
"men":[715.8,753.5,728.6,737.2,717.7,708.8,700.7,721.8,697.8,720.7,715.5,759.4,742.3,747.9,773.1,798.4,809.0,834.5,818.2,859.4,881.1,909.8,884.3,898.8],
"women":[1674.4,1754.2,1825.1,1826.8,1796.1,1761.4,1742.7,1731.4,1750.7,1737.4,1758.5,1766.6,1832.7,1853.8,1919.4,1928.4,1984.4,2053.5,2069.4,2110.1,2143.8,2210.7,2161.1,2161.6]
},
"Professional occupations in business and finance": {
"men":[159.0,178.2,169.1,164.8,170.1,166.9,167.1,190.8,192.2,196.5,204.9,212.6,212.1,211.1,216.5,237.2,229.7,228.0,227.7,241.6,257.7,255.5,277.4,283.8],
"women":[98.6,112.1,118.1,127.8,140.6,131.0,131.7,147.5,178.0,173.1,184.7,195.2,206.3,197.4,210.4,221.0,218.3,238.6,250.1,255.8,263.9,281.8,290.7,291.1]
},
"Financial, secretarial and administrative occupations": {
"men":[145.0,147.5,139.2,153.0,152.0,144.7,145.8,131.3,121.1,127.0,123.9,144.1,121.2,117.7,120.6,116.1,124.0,130.2,126.8,135.1,138.4,159.6,137.8,156.8],
"women":[711.3,737.3,753.7,759.6,750.7,746.9,729.1,703.1,719.4,704.2,701.4,702.2,686.0,641.7,627.0,628.4,644.5,651.9,665.5,661.5,673.9,724.0,691.7,693.7]
},
"Clerical occupations, including supervisors": {
"men":[411.8,427.8,420.2,419.4,395.6,397.2,387.8,399.7,384.5,397.1,386.7,402.8,409.0,419.1,436.0,445.0,455.3,476.4,463.6,482.7,485.1,494.7,469.0,458.2],
"women":[864.5,904.8,953.4,939.4,904.7,883.6,881.9,880.8,853.4,860.2,872.3,869.1,940.4,1014.8,1082.0,1079.1,1121.6,1163.0,1153.8,1192.8,1206.1,1204.9,1178.7,1176.8]
},
"Natural and applied sciences and related occupations": {
"men":[493.4,534.2,541.8,554.3,575.5,547.8,557.2,562.1,584.1,585.3,647.7,695.9,747.3,778.6,801.3,813.4,806.8,824.5,874.8,880.4,920.1,935.2,924.1,981.7],
"women":[119.9,120.2,131.4,130.4,138.4,123.0,123.0,129.8,143.2,138.4,162.0,174.2,195.1,205.4,212.5,223.4,229.6,222.0,228.1,247.2,259.6,268.4,263.6,274.1]
},
"Health occupations": {
"men":[128.7,138.8,144.5,133.3,146.4,147.7,166.3,156.6,156.6,153.3,154.8,155.0,166.4,153.4,159.5,166.9,171.6,178.5,178.3,188.0,191.8,201.6,206.9,214.6],
"women":[487.4,497.1,519.5,545.5,556.6,542.4,558.8,566.3,570.3,578.1,585.9,594.3,607.9,634.5,655.1,705.5,719.0,745.5,773.8,795.9,807.4,839.8,855.7,879.7]
},
"Professional occupations in health, nurse supervisors and registered nurses": {
"men":[82.2,84.9,83.0,74.6,83.7,88.2,94.2,93.9,90.7,90.6,93.4,91.3,97.2,90.5,87.9,95.3,100.2,103.1,100.3,104.8,107.9,114.9,118.5,118.7],
"women":[254.1,252.9,265.0,278.9,278.8,281.7,281.7,293.8,303.8,260.6,287.1,297.5,288.1,297.5,306.3,336.3,327.8,340.1,351.1,357.7,371.2,379.4,382.3,379.5]
},
"Technical, assisting and related occupations in health": {
"men":[46.6,53.9,61.5,58.7,62.7,59.5,72.1,62.8,65.9,62.7,61.4,63.8,69.2,62.9,71.6,71.5,71.4,75.4,77.9,83.3,83.9,86.7,88.4,95.9],
"women":[233.3,244.2,254.5,266.6,277.8,260.7,277.1,272.6,266.4,317.5,298.8,296.8,319.8,336.9,348.7,369.2,391.1,405.4,422.8,438.2,436.1,460.4,473.3,500.2]
},
"Occupations in social science, education, government service and religion": {
"men":[329.8,326.1,335.0,350.1,346.9,370.6,357.6,392.2,370.7,371.5,373.4,375.1,396.1,393.5,394.5,397.0,406.7,395.9,427.9,452.5,455.3,468.7,474.3,492.7],
"women":[432.9,469.6,487.0,554.2,565.9,610.6,638.5,667.8,670.8,676.6,680.5,721.0,730.2,764.3,809.5,837.9,856.7,847.2,910.3,944.4,978.9,1014.1,1079.8,1118.4]
},
"Occupations in social science, government service and religion": {
"men": [143.9, 138.2, 142.2, 147.8, 157.1, 159.7, 160.2, 170.3, 159.8, 166.3, 165.6, 178.1, 184.2, 186.2, 180.3, 189.1, 183.9, 184, 203.9, 208.7, 208.5, 228.5, 234.3, 254.4],
"women": [229.2, 248.7, 254, 281.2, 292, 319, 331.8, 355.9, 353.3, 366.9, 365.1, 394.2, 386.2, 414.3, 444.3, 461.7, 479.7, 461.9, 493.8, 515.1, 540.5, 566.5, 616.9, 640.4]
},
"Teachers and professors": {
"men": [185.9, 188, 192.8, 202.3, 189.8, 210.9, 197.4, 222, 210.9, 205.2, 207.7, 197, 211.9, 207.3, 214.2, 207.9, 222.8, 211.8, 224, 243.8, 246.8, 240.2, 239.9, 238.3],
"women": [203.7, 220.9, 233, 273, 273.9, 291.6, 306.7, 311.9, 317.5, 309.7, 315.4, 326.8, 343.9, 350, 365.2, 376.2, 377.1,385.4,416.5,429.3,438.4,447.6,462.9,478.0]
},
"Occupations in art, culture, recreation and sport": {
"men": [150.2,150.6,156.8,157.2,148.7,148.8,163.7,162.8,170.2,179.2,176.4,183.5,190.1,189.3,203.6,205.2,219.0,220.6,228.4,223.4,229.3,239.8,247.9,246.0],
"women": [141.2,158.3,157.4,156.8,146.2,152.4,166.8,183.8,180.2,190.9,196.4,199.1,224.1,227.0,233.7,232.3,248.4,246.1,267.9,263.0,277.7,289.9,296.0,306.3]
},
"Sales and service occupations": {
"men": [1292.1,1299.8,1328.8,1355.8,1316.4,1338.1,1357.7,1359.8,1383.4,1405.1,1392.5,1431.3,1448.7,1524.4,1592.5,1605.6,1648.2,1664.6,1676.8,1684.8,1767.7,1757.4,1770.8,1789.3],
"women": [1592.6,1624.1,1650.5,1634.2,1660.7,1656.7,1640.9,1686.3,1720.0,1746.1,1787.7,1845.6,1939.2,1996.5,2029.3,2116.8,2173.8,2175.0,2164.8,2210.4,2333.5,2339.1,2333.3,2352.8]
},
"Wholesale, technical, insurance, real estate sales specialists, and retail, wholesale and grain buyers": {
"men": [237.0,230.4,232.6,252.4,248.7,252.4,245.7,236.6,247.0,252.8,246.0,264.3,272.1,308.7,329.8,301.9,326.7,323.3,345.8,340.7,347.3,342.1,362.1,360.0],
"women": [89.9,100.6,102.8,98.7,107.1,108.6,111.7,111.7,115.1,118.0,128.2,135.5,144.7,159.5,170.0,174.9,185.0,174.7,183.4,189.7,212.5,194.6,207.8,209.0]
},
"Retail salespersons, sales clerks, cashiers, including retail trade supervisors": {
"men": [213.1,215.5,219.0,218.8,213.2,226.2,220.1,227.9,223.1,225.8,242.6,238.1,256.1,259.8,300.6,311.2,314.7,324.4,320.9,323.2,334.2,338.8,340.5,337.2],
"women": [517.1,543.4,531.1,536.8,557.5,536.9,524.0,555.1,563.2,553.5,563.2,573.4,602.6,625.5,647.2,665.7,687.8,693.8,700.5,701.6,738.2,723.2,722.9,741.8]
},
"Chefs and cooks, and occupations in food and beverage service, including supervisors": {
"men": [132.2,128.8,140.3,134.9,131.4,143.9,148.0,155.8,154.7,162.4,160.3,161.2,176.0,184.0,195.3,188.8,191.9,201.1,189.2,193.8,215.8,215.0,201.3,213.4],
"women": [221.1,217.8,221.8,226.4,226.2,224.8,221.3,227.7,234.7,239.8,250.7,253.8,283.9,294.4,306.6,324.1,323.0,327.9,308.8,325.6,342.5,331.4,324.6,319.7]
},
"Occupation in protective services": {
"men": [166.7,160.7,166.1,169.1,169.8,166.8,164.2,167.6,170.4,175.0,162.9,169.5,159.6,169.0,175.9,181.7,181.5,188.8,178.4,175.3,188.1,192.5,201.2,198.7],
"women": [188.6,183.6,189.0,195.7,196.5,194.3,192.5,194.8,200.8,209.0,194.6,207.0,198.7,207.4,216.5,223.6,229.1,234.8,223.0,220.6,236.1,242.9,251.1,255.9]
},
"Childcare and home support workers": {
"men": [24.9,24.3,20.7,16.9,15.0,17.6,19.0,16.5,15.1,15.2,14.5,17.7,18.9,14.8,13.7,15.3,14.4,14.1,15.6,17.8,17.8,15.4,16.4,19.8],
"women": [196.8,201.1,194.5,169.9,168.2,170.3,174.8,167.0,179.7,172.3,172.2,192.7,202.9,187.2,166.0,173.9,183.0,188.0,170.3,174.8,195.3,195.9,203.0,199.8]
},
"Sales and service occupations n.e.c., including occupations in travel and accommodation, attendants in recreation and sport as well as supervisors": {
"men": [518.1,540.2,550.1,563.7,538.2,531.2,560.8,555.3,573.1,573.9,566.2,580.5,566.1,588.2,577.1,606.6,618.9,613.0,626.9,633.9,664.5,653.5,649.2,660.1],
"women": [545.9,538.2,577.4,575.7,575.0,588.7,580.8,597.6,596.9,628.5,641.6,652.6,666.0,691.5,699.0,736.3,747.4,744.6,757.2,773.2,796.8,843.8,825.1,825.2]
},



"Trades transport and equipment operators and related occupations": {
"men":  [2029.4,2015.1,2075.9,2044.2,1905.2,1843.0,1822.1,1901.5,1936.8, 1935.4, 2010.3, 2010.5, 2031.5, 2064.6, 2063.6, 2103.6, 2173.2, 2207.0, 2238.8, 2286.9, 2343.0, 2437.0, 2307.0, 2330.5],
"women": [111.3, 112.4, 117.7, 119.8, 111.4, 111.4, 110.4, 109.0, 120.2, 125.8, 131.2, 146.7, 130.5, 136.3, 142.1, 145.7, 154.9, 167.3, 156.7, 158.7, 171.7, 172.2, 157.3, 154.5]
},


"Contractors and supervisors in trades and transportation": {
"men":  [199.2, 211.7, 220.2, 225.7, 221.8, 210.9, 212.7, 206.4, 230.3, 213.4, 196.3, 215.9 ,182.0 ,191.5 ,198.6 ,207.0, 200.2 ,223.7, 231.6 ,233.4 ,235.5, 258.9, 254.6, 244.2],
"women": [8.9, 10.2, 9.6, 10.5, 9.9, 9.8, 9.8, 10.1, 11.0, 12.1, 13.1, 15.5, 11.6, 12.1, 12.3, 13.4, 16.8, 13.3, 12.7, 11.2, 12.7, 12.1, 13.2, 14.6]
},

"Construction trades": {
"men":  [295.2, 287.5, 296.6, 280.8, 248.3, 240.6, 243.2 ,251.0 ,246.6,243.2 ,270.5, 271.8, 297.1, 288.5 ,293.5 ,308.1, 316.3, 313.2, 330.8, 348.0 ,361.2 ,388.0, 368.5, 383.1],
"women": [4.1, 6.7, 8.2, 6.9, 5.8, 7.5, 5.0, 5.4, 4.4, 5.9, 8.3, 9.2, 8.7, 8.4, 8.5, 9.2, 11.7, 9.6, 13.3, 12.1, 15.2, 17.1, 12.6, 12.4]
},

"Other trades occupations": {
"men":  [782.6, 760.4 ,787.5, 777.6,726.7 ,711.8, 688.9, 717.8 ,729.1,734.5 ,776.2, 760.5 ,789.1 ,799.3, 805.8, 799.7,823.1, 825.1, 836.5, 838.7, 859.4, 899.8 ,837.5, 842.5],
"women": [47.8, 44.4, 40.2, 42.3, 39.4, 38.8, 35.9, 35.8, 42.6, 44.9, 43.5, 49.5, 44.1, 43.3, 43.6, 48.0, 43.8, 52.2, 49.5, 44.0, 48.2, 50.2, 40.8, 38.3]
},

"Transport and equipment operators": {
"men":  [497.0, 494.8, 497.3 ,484.5, 463.0 ,442.5 ,441.1 ,468.5, 478.1 ,483.8, 493.8, 503.9, 522.9, 541.3, 522.7, 542.6, 558.4, 558.1, 547.2, 568.8, 582.7, 575.7, 563.4, 567.1],
"women": [31.1, 33.7, 38.2, 38.2, 36.0, 33.2, 35.9, 34.8, 39.2, 39.9, 37.7, 41.6, 40.1, 45.6, 47.8, 42.1, 44.5, 50.0, 43.0, 45.9, 51.2, 48.6, 48.5, 51.1]
},

" Trades helpers, construction, and transportation labourers and related occupations": {
"men":  [255.5, 260.6, 274.4, 275.6, 245.4, 237.3, 236.1, 257.8, 252.7, 260.5, 273.5, 258.4, 240.3, 244.0, 242.9, 246.2, 275.2, 286.9, 292.7, 298.1, 304.1, 314.6, 283.0, 293.7],
"women": [19.3, 17.5, 21.4, 22.0, 20.2, 22.2, 23.8, 23.0, 23.0, 23.1, 28.5, 30.9, 26.1, 27.0, 30.0, 32.9, 38.2, 42.2, 38.2, 45.5, 44.4, 44.3, 42.3, 38.1]
},

"Occupations unique to primary industry ": {
"men":  [505.7, 506.9 ,495.4, 492.2, 490.9, 480.7, 485.3, 481.5, 477.9, 473.0, 472.5, 469.5, 458.9, 452.7, 424.2, 421.2, 437.7, 448.3, 461.3, 464.5, 462.8, 443.9, 428.2, 428.5],
"women": [123.7, 123.1, 125.3, 129.9, 131.7, 126.7, 132.3, 130.0, 124.2, 124.7, 123.9, 133.4, 126.3, 116.5, 100.4, 104.7, 107.3, 108.7, 114.8, 119.9, 115.1, 99.0, 103.1, 98.2]
},

"Occupations unique to processing, manufacturing and utilities": {
"men":  [640.7, 670.9, 710.9, 659.5, 596.2, 584.9, 569.5, 598.1, 615.5, 646.9, 671.7, 696.8, 724.9, 750.4, 752.1, 777.3, 792.7, 786.1, 754.8, 702.1, 671.8, 616.9, 551.2, 565.4],
"women": [306.5, 319.6, 326.0, 300.0, 269.9, 252.9, 248.1, 262.6, 283.1, 285.3, 308.4, 327.6, 344.7, 352.4, 337.8, 361.0, 356.0, 354.9, 330.2, 315.6, 297.4, 278.6, 236.0, 222.7]
},

"Machine operators and assemblers in manufacturing, including supervisors": {
"men":  [516.2, 535.5, 550.8, 516.2, 460.6, 457.0, 438.0, 466.8, 485.7, 510.4, 524.8, 540.3, 591.6, 631.9, 637.1, 659.5, 664.4, 658.4, 625.7, 580.8, 552.4, 518.3, 465.1, 478.5],
"women": [238.2, 246.4, 239.9, 225.9, 201.6, 185.8, 184.7, 193.6, 211.9, 211.9, 229.6, 247.0, 266.7, 277.2, 263.7, 286.2, 283.0, 279.5, 249.9, 234.8, 224.5, 207.2, 178.5, 168.2]
},

"Labourers in processing, manufacturing and utilities": {
"men":  [124.5, 135.4, 160.1, 143.3, 135.6, 128.0, 131.5, 131.3, 129.9, 136.5, 146.9, 156.6, 133.2, 118.4, 115.0, 117.8, 128.3, 127.6, 129.1, 121.3, 119.4, 98.6, 86.1, 86.9],
"women": [68.2, 73.1, 86.1, 74.1, 68.3, 67.1, 63.5, 69.0, 71.1, 73.4, 78.8, 80.6, 77.9, 75.2, 74.2, 74.8, 73.0, 75.5, 80.4, 80.8, 72.9, 71.4, 57.5, 54.5]
}


}

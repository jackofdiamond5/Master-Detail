﻿using System;

namespace Master_Detail.Models.Northwind
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public int SupplierID { get; set; }
        public int CategoryID { get; set; }
        public string QuantityPerUnit { get; set; }
        public double UnitPrice { get; set; }
        public double UnitsInStock { get; set; }
        public double UnitsOnOrder { get; set; }
        public double ReorderLevel { get; set; }
        public bool Discontinued { get; set; }

    }
}

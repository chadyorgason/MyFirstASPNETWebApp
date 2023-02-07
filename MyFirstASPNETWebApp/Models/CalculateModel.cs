using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Models
{
    public class CalculateModel
    {
        [Range(0,100)]
        public string pctA { get; set; }
        [Range(0,100)]
        public string pctGP { get; set; }
        [Range(0, 100)]
        public string pctQ { get; set; }
        [Range(0, 100)]
        public string pctME { get; set; }
        [Range(0, 100)]
        public string pctFE { get; set; }
        [Range(0, 100)]
        public string pctI { get; set; }

    }
}

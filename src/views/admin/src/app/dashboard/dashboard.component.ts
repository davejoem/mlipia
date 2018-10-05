import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public patients: any[];
  public totalPatients: number = 1256;

  constructor() { }

  ngOnInit() {
    $(function () {
      MorrisArea();
      Jknob();
      menuToggle();
    });

    function MorrisArea() {
      Morris.Area({
        element: 'area_chart',
        data: [{
          period: '2011',
          America: 2,
          India: 0,
          Australia: 0
        }, {
          period: '2012',
          America: 31,
          India: 10,
          Australia: 5
        }, {
          period: '2013',
          America: 15,
          India: 78,
          Australia: 23
        }, {
          period: '2014',
          America: 48,
          India: 12,
          Australia: 7
        }, {
          period: '2015',
          America: 20,
          India: 8,
          Australia: 55
        }, {
          period: '2016',
          America: 78,
          India: 36,
          Australia: 20
        }, {
          period: '2017',
          America: 20,
          India: 9,
          Australia: 5
        }

        ],
        lineColors: ['#748298', '#a890d3', '#f7bb97'],
        xkey: 'period',
        ykeys: ['America', 'India', 'Australia'],
        labels: ['America', 'India', 'Australia'],
        pointSize: 2,
        lineWidth: 1,
        resize: true,
        fillOpacity: 0.7,
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        hideHover: 'auto'
      });
    }

    function Jknob() {
      $('.knob').knob({
        draw: function () {
          // 'tron' case
          if (this.$.data('skin') == 'tron') {

            var a = this.angle(this.cv) // Angle
              ,
              sa = this.startAngle // Previous start angle
              ,
              sat = this.startAngle // Start angle
              ,
              ea // Previous end angle
              , eat = sat + a // End angle
              ,
              r = true;

            this.g.lineWidth = this.lineWidth;

            this.o.cursor &&
              (sat = eat - 0.3) &&
              (eat = eat + 0.3);

            if (this.o.displayPrevious) {
              ea = this.startAngle + this.angle(this.value);
              this.o.cursor &&
                (sa = ea - 0.3) &&
                (ea = ea + 0.3);
              this.g.beginPath();
              this.g.strokeStyle = this.previousColor;
              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
              this.g.stroke();
            }

            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();

            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();

            return false;
          }
        }
      });
    }

    $(window).on('scroll', function () {
      $('.card .sparkline').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
          $(this).addClass('pullUp');
        }
      });
    });

    $(function () {
      'use strict';
      var mapData = {
        'US': 298,
        'AU': 760,
        'CA': 870,
        'IN': 2000000,
        'GB': 120,
      };

      if ($('#world-map-markers').length > 0) {
        $('#world-map-markers').vectorMap(
          {
            map: 'world_mill_en',
            backgroundColor: 'transparent',
            borderColor: '#fff',
            borderOpacity: 0.25,
            borderWidth: 0,
            color: '#e6e6e6',
            regionStyle: {
              initial: {
                fill: '#ebebeb'
              }
            },

            markerStyle: {
              initial: {
                r: 5,
                'fill': '#fff',
                'fill-opacity': 1,
                'stroke': '#000',
                'stroke-width': 1,
                'stroke-opacity': 0.4
              },
            },

            markers: [
              { latLng: [37.09, -95.71], name: 'America' },
              { latLng: [-25.27, 133.77], name: 'Australia' },
              { latLng: [56.13, -106.34], name: 'Canada' },
              { latLng: [20.59, 78.96], name: 'India' },
              { latLng: [55.37, -3.43], name: 'United Kingdom' },
            ],

            series: {
              regions: [{
                values: {
                  'US': '#bdf3f5',
                  'AU': '#f9f1d8',
                  'IN': '#ffd4c3',
                  'GB': '#e0eff5',
                  'CA': '#efebf4',
                },
                attribute: 'fill'
              }]
            },
            hoverOpacity: null,
            normalizeFunction: 'linear',
            zoomOnScroll: false,
            scaleColors: ['#000000', '#000000'],
            selectedColor: '#000000',
            selectedRegions: [],
            enableZoom: false,
            hoverColor: '#fff',
          });
      }
    });

    $(function () {
      'use strict';
      var mapData = {
        'US': 298,
        'AU': 760,
        'CA': 870,
        'IN': 2000000,
        'GB': 120,
      };

      if ($('#world-map-markers2').length > 0) {
        $('#world-map-markers2').vectorMap(
          {
            map: 'world_mill_en',
            backgroundColor: 'transparent',
            borderColor: '#fff',
            borderOpacity: 0.25,
            borderWidth: 0,
            color: '#e6e6e6',
            regionStyle: {
              initial: {
                fill: '#ebebeb'
              }
            },

            markerStyle: {
              initial: {
                r: 5,
                'fill': '#fff',
                'fill-opacity': 1,
                'stroke': '#000',
                'stroke-width': 1,
                'stroke-opacity': 0.4
              },
            },

            markers: [
              { latLng: [37.09, -95.71], name: 'America' },
              { latLng: [-25.27, 133.77], name: 'Australia' },
              { latLng: [56.13, -106.34], name: 'Canada' },
              { latLng: [20.59, 78.96], name: 'India' },
              { latLng: [55.37, -3.43], name: 'United Kingdom' },
            ],

            series: {
              regions: [{
                values: {
                  'US': '#bdf3f5',
                  'AU': '#f9f1d8',
                  'IN': '#ffd4c3',
                  'GB': '#e0eff5',
                  'CA': '#efebf4',
                },
                attribute: 'fill'
              }]
            },
            hoverOpacity: null,
            normalizeFunction: 'linear',
            zoomOnScroll: false,
            scaleColors: ['#000000', '#000000'],
            selectedColor: '#000000',
            selectedRegions: [],
            enableZoom: false,
            hoverColor: '#fff',
          });
      }
    });

    $('.sparkline').each(function () {
      var $this = $(this);
      $this.sparkline('html', $this.data());
    });

    $('.sidebar .menu .list').slimscroll({
      height: 'calc(100vh - 65px)',
      color: 'rgba(0,0,0,0.2)',
      position: 'left',
      size: '2px',
      alwaysVisible: false,
      borderRadius: '3px',
      railBorderRadius: '0'
    });

    function menuToggle() {
      // Collapse or Expand Menu
      $('.menu-toggle').on('click', function (e) {
        const $this = $(this);
        const $content = $this.next();

        if ($($this.parents('ul')[0]).hasClass('list')) {
          const $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');
          $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
            if ($(val).is(':visible')) {
              $(val).prev().toggleClass('toggled');
              $(val).slideUp();
            }
          });
        }

        $this.toggleClass('toggled');
        $content.slideToggle(320);
      });
    }

    $('body').removeClass('authentication sidebar-collapse');

    $('.ls-toggle-btn').on('click', function () {
      $('body').toggleClass('ls-toggle-menu');
    });
  }
}


/*
Serialize form fields into JSON
 */

(function() {
  (function($) {
    $.fn.serializeJSON = function() {
      var form, json;
      json = {};
      form = $(this);
      form.find("input, select").each(function() {
        var val;
        val = void 0;
        if (!this.name) {
          return;
        }
        if ("radio" === this.type) {
          if (json[this.name]) {
            return;
          }
          json[this.name] = (this.checked ? this.value : "");
        } else if ("checkbox" === this.type) {
          val = json[this.name];
          if (!this.checked) {
            if (!val) {
              json[this.name] = "";
            }
          } else {
            json[this.name] = (typeof val === "string" ? [val, this.value] : ($.isArray(val) ? $.merge(val, [this.value]) : this.value));
          }
        } else {
          json[this.name] = this.value;
        }
      });
      return json;
    };
  })(jQuery);

  (function($) {
    var form, formUrl;
    form = $("form");
    formUrl = "http://getsimpleform.com/messages/ajax?form_api_token=73913f3be5ade052a6662a83b1c71af9";
    form.on("submit", function(e) {
      e.preventDefault();
      $.ajax({
        dataType: "jsonp",
        url: formUrl,
        data: form.serializeJSON()
      });
      $(".msg").addClass("show");
      $("form").addClass("hide");
      $("input[type=text],textarea").val("");
    });
  })(jQuery);

}).call(this);

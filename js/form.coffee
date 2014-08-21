
###
Serialize form fields into JSON
###
(($) ->
  $.fn.serializeJSON = ->
    json = {}
    form = $(this)
    form.find("input, select").each ->
      val = undefined
      return  unless @name
      if "radio" is @type
        return  if json[@name]
        json[@name] = (if @checked then @value else "")
      else if "checkbox" is @type
        val = json[@name]
        unless @checked
          json[@name] = ""  unless val
        else
          json[@name] = (if typeof val is "string" then [
            val
            this.value
          ] else (if $.isArray(val) then $.merge(val, [@value]) else @value))
      else
        json[@name] = @value
      return

    json

  return
) jQuery
(($) ->
  form = $("form")
  formUrl = "http://getsimpleform.com/messages/ajax?form_api_token=73913f3be5ade052a6662a83b1c71af9"
  form.on "submit", (e) ->
    e.preventDefault()
    $.ajax
      dataType: "jsonp"
      url: formUrl
      data: form.serializeJSON()

    $(".msg").addClass "show"
    $("form").addClass "hide"
    $("input[type=text],textarea").val ""
    return

  return
) jQuery
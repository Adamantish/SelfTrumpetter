describe("ProjectListView", function(){
  
  var adam;

  beforeEach(function(){
    adam = new app.models.User({
      name: "Adam",
      firstName: "Adam",
      lastName: "Misrahi",
      bio: "(In production)",
      image_url: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
      mission: "To LIDL and beyond" 
    });

    adam.save();

    adam.projects.create({
      title: "Demon Duck Hunt",
      imageUrl: "thething.jpg",
      projectUrl: "place.com/wah"
    });

    view = new ap.views.ProjectListView({
      collection: adam.projects
    });

    it("creates a div#projects", function(){
      expect(view.el.nodeName).toBe('DIV');
      expect(view.el.id).toBe('projects');
    });

    describe('render', function(){

      beforeEach(function(){
        result = view.render();
      });

      it("returns the view", function(){
        expect(result).toEqual(view);
      });

      it("renders all the user's projects", function(){
        expect(view.$el.find('.project').length).toBe(1);
        expect(view.$el.find('.project').html()).toMatch(/Demon Duck Hunt/);
        expect(view.$el.find('.project').html()).toMatch(/thething.jpg/);
        expect(view.$el.find('.project').html()).toMatch(/place.com\/wah/);

      })
    });
  });
});